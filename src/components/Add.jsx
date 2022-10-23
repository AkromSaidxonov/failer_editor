import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addText } from "../redux/text";
import draftToHtml from "draftjs-to-html";
import { v4 as uuidv4 } from "uuid";

function Add() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    title: "",
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };
  const addDetails = async (event) => {
    event.preventDefault();
    const data = {
      id: uuidv4(),
      title: userInfo.title,
      description: draftToHtml(convertToRaw(description.getCurrentContent())),
    };
    navigate("/");
    dispatch(addText(data));
  };

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              <h3 className="myaccount-content"> Add </h3>
              <div className="form-row">
                <div className="form-group col-md-12 mb-3">
                  <label className="font-weight-bold">
                    {" "}
                    Title <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={userInfo.title}
                    onChange={onChangeValue}
                    className="form-control mt-2"
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="form-group col-md-12 editor">
                  <label className="font-weight-bold mb-2 mt-2">
                    {" "}
                    Description <span className="required"> * </span>{" "}
                  </label>
                  <Editor
                    editorState={description}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                  />
                </div>
                <div className="form-group col-sm-12 text-right">
                  <button type="submit" className="btn btn-primary mt-3">
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Add;
