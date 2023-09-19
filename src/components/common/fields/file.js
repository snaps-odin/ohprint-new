

import React from 'react';
import update from 'react-addons-update'

import { getDatasetByName, getDataURLByFile } from 'utils/dom';
import { snakeToCamel } from 'utils/string';
import {goTutorial, getLocationOrigin} from "../../../utils/url";
import styled from "styled-components";

export default class FileField extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			files: []
		};

		this.prevFiles = null;

		this.aMB = 1000 * 1000;

		this.onClickRemove = this.onClickRemove.bind(this);
    this.onClickOnlyOneFileRemove = this.onClickOnlyOneFileRemove.bind(this);
    this.onClickGoTutorial = this.onClickGoTutorial.bind(this);
	}
  onClickGoTutorial() {
    window.open(`${getLocationOrigin()}/tutorial`,'tutorial')
  }

	onClickRemove(event) {
		let { input, handleChangeFormValue } = this.props;
    let { name } = input;

    Promise.all([
      this.setState(update(this.state, {
        files: {
          $splice: [
            [ getDatasetByName(event.currentTarget, 'index'), 1 ]
          ]
        }
      }))
    ]).then(() => {
      input.onBlur();
    }).then(() => {
      handleChangeFormValue(snakeToCamel(`selected-${name}`), this.state.files);
    });
  }

  onClickOnlyOneFileRemove(event){
    let { input, handleChangeFormValue } = this.props;
    const {name} = input;

    const targetIdx = getDatasetByName(event.currentTarget, 'index')
    const newFileArr = this.state.files.filter((_, index) => index === targetIdx);

    handleChangeFormValue(snakeToCamel(`selected-${name}`),this.state.files);
    this.setState({files: newFileArr})
  }

	toArrayFromFileList(fileList) {
		return fileList
			?
			new Array(fileList[ 'length' ])
				.fill(true)
				.reduce((target, item, index) => {
					target.push(fileList[ index ][ 'name' ]);

					return target;
				}, [])
			: [];
	}

	componentDidUpdate(prevProps, prevState) {
		let { input: { value: currentValue, name }, maxFileLength, maxFileSize } = this.props;
		let { input, handleChangeFormValue } = this.props;
		let { files } = this.state;

		let currentFiles = this.toArrayFromFileList(currentValue);

		if (!Object.is(JSON.stringify(this.prevFiles), JSON.stringify(currentFiles)) && currentFiles.length > 0) {
			this.prevFiles = [].concat(currentFiles);

			let startIndex = files.length;

			new Array(Math.min(maxFileLength, maxFileLength - startIndex))
				.fill(true)
				.map((item, index) => {
					let file = currentValue[ index ];

					file && getDataURLByFile(file).then(result => {
						this.setState(update(this.state, {
							files: {
								[index + startIndex]: {
									$set: {
										file,
										selected: true,
										size: file[ 'size' ],
										image: result,
										error: file[ 'size' ] > maxFileSize * this.aMB
									}
								}
							}
						}));
					}).then(() => {
						input.onBlur();
					}).then(() => {
						handleChangeFormValue(snakeToCamel(`selected-${name}`), this.state.files);
					});
				});
		}
	}


	render() {
		let { input, id, label, multiple, accept, maxFileLength, maxFileSize, giftCardFile,customBulkFile, eventForm, meta: { asyncValidating, touched, error, warning }, layerFile } = this.props;
		let { files } = this.state;

		let isFull = files.length >= maxFileLength;

		return (!layerFile && !giftCardFile && !customBulkFile) ? (
			<div className="file">
				<label className={isFull ? 'disabled' : null} htmlFor={id}>
					<span>
						<span className="tit">이미지 첨부 <em>{files.length || null}</em></span>
						<span className="desc">{maxFileSize}MB이하 이미지, 최대 {maxFileLength}개까지 첨부가능합니다.</span>
						<span className="icon icon-file-1818"/>
					</span>
				</label>

				<input {...input}
				       id={id}
				       type="file"
				       value={null}
				       multiple={multiple}
				       accept={accept}
				       disabled={isFull}/>

				{files.length > 0 && (
					<ul>
						{files.reduce((target, file, index) => {

							file && target.push(
								<li className={file[ 'error' ] ? 'error' : null}>
									<span className="icon icon-delete-2020"
									      data-index={index}
									      onClick={this.onClickRemove}/>

									<img src={file[ 'image' ]}/>

									{file[ 'error' ] && (
										<span className="error">{maxFileSize}MB 제한초과</span>
									)}
								</li>
							);

							return target;
						}, [])}
					</ul>
				)}
			</div>
		)
      :
      giftCardFile  ?
        (
          <div>
            <div className="file" style={{width:'auto'}}>
              <label className={isFull ? 'disabled' : null} htmlFor={id}>
                <div style={{
                  display:'table', width:'94px', height:'34px', border: '1px solid #cccccc'
                }}>
                  <div style={{
                    display: 'table-cell',
                    verticalAlign:'middle',
                    textAlign:"center",
                    marginBottom:'15px'
                  }}>
                    파일 업로드
                  </div>
                </div>


              </label>

              <input {...input}
                     id={id}
                     type="file"
                     value={null}
                     multiple={multiple}
                     accept={accept}
                     disabled={isFull}/>
            </div>

            <dl className={"attention-wrap giftCardDL"}>
              <dd>
                <span>5MB 이하의 ZIP, PDF, JPG를 지원합니다.</span>
              </dd>
              <dd>
                <span>최대 4개까지 업로드 가능합니다.</span>
              </dd>
            </dl>

            {files.length > 0 && (
              <ul className={"giftcard"}>
                {files.reduce((target, file, index) => {

                  file && target.push(
                    <li className={file[ 'error' ] ? 'error' : null}>
                      <div className={"fileItems"}>
                        <span>{file.file.name}</span>
                        <span className="icon icon-delete-2020"
                              data-index={index}
                              onClick={this.onClickOnlyOneFileRemove}/>
                      </div>



                      {file[ 'error' ] && (
                        <span className="error">{maxFileSize}MB 제한초과</span>
                      )}
                    </li>
                  );

                  return target;
                }, [])}
              </ul>
            )}
          </div>
        )
        :
          customBulkFile ?
            (
              <div className="bulk-container">
                <div className="bulk-top" style={{
                  width: '100%',
                  display:'table'
                }}>
                  <div className="file" style={{width:'auto'}}>
                    <label className={isFull ? 'disabled' : null} htmlFor={id}>
                      <div style={{
                        display:'table', width:'94px', height:'34px', border: '1px solid #cccccc'
                      }}>
                        <div style={{
                          display: 'table-cell',
                          verticalAlign:'middle',
                          textAlign:"center",
                          marginBottom:'15px'
                        }}>
                          파일 업로드
                        </div>

                      </div>


                    </label>

                    <input {...input}
                           id={id}
                           type="file"
                           value={null}
                           multiple={multiple}
                           accept={accept}
                           disabled={isFull}/>
                  </div>
                  <div className="guide">
                    <span onClick={this.onClickGoTutorial}>작업가이드</span>
                    <span>파일안내</span>
                  </div>
                </div>
                <dl className={"attention-wrap giftCardDL"}>
                  <dd>
                    <span>25MB 이하의 ZIP, PDF, JPG, PNG를 지원합니다.</span>
                  </dd>
                  <dd>
                    <span>최대 5개까지 업로드 가능합니다.</span>
                  </dd>
                </dl>

                {files.length > 0 && (
                  <ul className={"bulkfile"}>
                    {files.reduce((target, file, index) => {

                      file && target.push(
                        <li className={file[ 'error' ] ? 'error' : null}>
                          <div className={"fileItems"}>
                            <span>{file.file.name}</span>
                            <span className="icon icon-delete-2020"
                                  data-index={index}
                                  onClick={this.onClickRemove}/>
                          </div>



                          {file[ 'error' ] && (
                            <span className="error">{maxFileSize}MB 제한초과</span>
                          )}
                        </li>
                      );

                      return target;
                    }, [])}
                  </ul>
                )}
              </div>
            )
        : eventForm? (
              <EventFormWrap>
                <label className={isFull ? 'disabled' : null} htmlFor={id}>
                  {
                    (files.length === 0) ? (
                      <FileUploadWrap>
                        {label}
                      </FileUploadWrap>
                      )
                      :(
                        <UploadCompleteWrap>
                        <FileName>{files[0].file.name}</FileName>
                          <DeleteButton onClick={this.onClickRemove} data-index={0}>삭제</DeleteButton>
                        </UploadCompleteWrap>
                      )}
                </label>

                <input {...input}
                       id={id}
                       type="file"
                       value={null}
                       multiple={multiple}
                       accept={'.jpg, .png, .pdf, .zip'}
                       disabled={isFull}/>

                {files.length > 0 && files[0][ 'error' ] && (
                  <span className="error layerFile">{maxFileSize}MB 제한초과</span>
                )}
              </EventFormWrap>
            )
        :
              (
        <div className="file layerFile">
          <label className={isFull ? 'disabled' : null} htmlFor={id}>

            {
              (files.length === 0) ? (
                <span>
                  <span className="tit">{label? label : '첨부파일(선택)'}</span>
                  <span className="desc">{maxFileSize}MB이하 첨부가능합니다.</span>
                  <span className="icon icon-file-1818"/>
                </span>
              )
                :
                (
                  <span>
                    <span className="tit">첨부파일(선택)</span>
                    {
                      files.length > 0 && (
                        <span>
                            <span>{files[0].file.name}</span>
                        </span>

                      )

                    }

                  </span>

                )
            }


          </label>

          <input {...input}
                 id={id}
                 type="file"
                 // value={null}
                 multiple={multiple}
                 accept={'.jpg, .png, .pdf, .zip'}
                 disabled={isFull} />

          {
            files.length > 0 && (
              <span className={"fileDelete"}>
                      <span className="icon icon-delete-2020"
                            data-index={0}
                            onClick={this.onClickOnlyOneFileRemove}/>
              </span>
            )
          }

          {files.length > 0 && files[0][ 'error' ] && (
            <span className="error layerFile">{maxFileSize}MB 제한초과</span>
          )}
        </div>
      )
	}
}

const EventFormWrap = styled.div`
  height: 100%;
  font-size: 12px;
`;

const FileUploadWrap = styled.span`
  text-align: center;
  padding: 10px 0;
  border: solid 1px #ccc;
  cursor: pointer;
  display: block;
`;

const UploadCompleteWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileName = styled.div``;

const DeleteButton = styled.button`
    padding: 10px 14px 10px 15px;
    border: solid 1px #ccc;
    background-color: #fff;
`;
