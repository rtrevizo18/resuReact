import { useState } from "react";
import "./Form.css";
import { useMultiStepForm } from "../../useMultiStepForm";

function FormInputBox({
  inputName,
  inputType,
  inputText,
  isReq,
  placeHolder = "",
}) {
  return (
    <div className="form-input-elem">
      <label for={inputName}>
        <span className="ast">{isReq ? "*" : ""}</span>
        {inputText}:
      </label>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        required={isReq ? true : undefined}
        placeholder={placeHolder}
      />
    </div>
  );
}

function FormTab({ title, children }) {
  return (
    <div className="form-tab">
      <div className="form-title">{title} Information</div>
      <div className="form-content">{children}</div>
    </div>
  );
}

function FirstTab() {
  return (
    <FormTab title="Header">
      <FormInputBox
        inputName="first-name"
        inputType="text"
        inputText="First Name"
        isReq={true}
        placeHolder="Tom"
      />
      <FormInputBox
        inputName="last-name"
        inputType="text"
        inputText="Last Name"
        isReq={true}
        placeHolder="Hiddleston"
      />
      <FormInputBox
        inputName="email"
        inputType="email"
        inputText="Email"
        isReq={true}
        placeHolder="example@org.com"
      />
      <FormInputBox
        inputName="phone-num"
        inputType="tel"
        inputText="Phone Number"
        isReq={true}
        placeHolder="8888888888"
      />
      <FormInputBox
        inputName="location"
        inputType="text"
        inputText="City"
        isReq={false}
        placeHolder="New York City"
      />
      <FormInputBox
        inputName="state"
        inputType="text"
        inputText="State/Province"
        isReq={false}
        placeHolder="New York"
      />
    </FormTab>
  );
}

function SecondTab() {
  return (
    <FormTab title="Summary">
      <FormInputBox
        inputName={"line-" + 1}
        inputType="text"
        inputText="First Name"
        isReq={true}
      />
    </FormTab>
  );
}

function FormTabular() {
  <form id="header-form" method="#">
    <FirstTab />
    <p id="form-ast-notice">
      <span className="ast">*</span>REQUIRED FIELDS
    </p>
  </form>;
}

export default function Form() {
  const { steps, currentStepIndex, step } = useMultiStepForm([<FirstTab />]);
  return (
    <form id="header-form" method="#">
      {step}
      <div className="form-buttons">
        <button>Back</button>
        <button>Next</button>
      </div>
      <p id="form-ast-notice">
        <span className="ast">*</span>REQUIRED FIELDS
      </p>
    </form>
  );
}
