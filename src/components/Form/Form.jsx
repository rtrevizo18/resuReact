import "./Form.css"

function Links(){
    return (
    <>
    </>);
}


export default function Form(){
    return (
        <div id="form-body">
            <h2>Header Information</h2>
            <form id="header-form" method="#">
                <div className="form-input-elem">
                    <label for="first-name"><span className="ast">*</span>First Name:</label>
                    <input type="text" id="first-name" name="first-name" required/>
                </div>
                <div className="form-input-elem">
                    <label for="last-name"><span className="ast">*</span>Last Name:</label>
                    <input type="text" id="last-name" name="last-name" required/>
                </div>
                <div className="form-input-elem">
                    <label for="email"><span className="ast">*</span>Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-input-elem">
                    <label for="phone-num"><span className="ast">*</span>Phone Number:</label>
                    <input type="tel" id="phone-num" name="phone-num" required/>
                </div>
                <div className="form-input-elem">
                    <label for="location">City:</label>
                    <input type="text" id="location" name="location"/>
                </div>
                <div className="form-input-elem">
                    <label for="state">State/Province:</label>
                    <input type="text" id="state" name="state"/>
                </div>
            </form>
            <p id="form-ast-notice"><span className="ast">*</span>REQUIRED FIELDS</p>
        </div>
    )
}