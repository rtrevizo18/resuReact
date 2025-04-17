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
      <label htmlFor={inputName}>
        {isReq && <span className="ast"></span>}
        {inputText}:
      </label>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        required={isReq}
        placeholder={placeHolder}
      />
    </div>
  );
}

function FormTab({ title, children }) {
  return (
    <div className="form-tab">
      <div className="form-title">{title}</div>
      <div className="form-content">{children}</div>
    </div>
  );
}

function FirstTab() {
  return (
    <FormTab title="First Info">
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

function FormButtons({ isFirstStep, isLastStep, back, next }) {
  return (
    <div className="form-buttons">
      {!isFirstStep && (
        <button type="button" onClick={back}>
          Back
        </button>
      )}
      <button type="button" onClick={next}>
        {isLastStep ? "Finish" : "Next"}
      </button>
    </div>
  );
}

const tabs = [<FirstTab />, <SecondTab />];

export default function Form() {
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useMultiStepForm(tabs);
  return (
    <div id="form-body">
      <form id="header-form" method="#">
        <div id="form-step">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <FormButtons
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          back={back}
          next={next}
        />
        <p id="form-ast-notice">
          <span className="ast">*</span>REQUIRED FIELDS
        </p>
      </form>
    </div>
  );
}
