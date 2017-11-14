import React from 'react'

class EditAccountMgmtForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            accountOwner: props.board.accountOwner,
            openDate: props.board.openDate,
            closeDate: (props.board.closeDate ? props.board.closeDate : ''),
            active: props.board.active,
            errors: {},
            touched: {}
        }
    }

    handleBlur = (fieldName) => (e) => {
        this.setState({
          touched: { ...this.state.touched, [fieldName]: true },
        });
    }

    isInvalid = (fieldName) => {
        const hasErrors = this.state.errors[fieldName]
        const isTouched = this.state.touched[fieldName]

        return hasErrors && isTouched
    }

    isSubmitEnabled = () => {
        let enableSubmit = true;
        return enableSubmit
    }

    handleAccountOwnerChange = (e) => {
        let errorMessage = (e.target.value.length === 0 ? 'Required field' : null)

        this.setState({
            accountOwner: e.target.value,
            errors: { ...this.state.errors, ['accountOwner']: errorMessage }
        })
    }

    handleOpenDateChange = (e) => {
        let errorMessage = (e.target.value.length === 0 ? 'Invalid date' : null)

        this.setState({
            openDate: e.target.value,
            errors: { ...this.state.errors, ['openDate']: errorMessage }
        })
    }

    handleCloseDateChange = (e) => {
        this.setState({
            closeDate: e.target.value,
            errors: { ...this.state.errors, ['closeDate']: undefined }
        })
    }

    handleActiveChange = (e) => {
        this.setState({
            active: (e.target.value === 'true' ? true : false)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(!this.isSubmitEnabled()) {
            return;
        }

        let boardSubSection = {
            accountOwner: this.state.accountOwner,
            openDate: this.state.openDate,
            closeDate: this.state.closeDate,
            active: this.state.active
        }

        let updatedBoard = Object.assign({}, this.props.board, boardSubSection)

        this.props.saveBoard(updatedBoard)
        this.props.disableEditMode()
    }

    render() {
        let board = this.props.board

        if (board === null || board === undefined) {
            return <div>Nothing to Show</div>
        }

        return (
            <form onSubmit={this.handleSubmit} className="col-md-10">
                <div className="row group-section">
                    <div class="col-md-4">
                        <input type="text"
                               value={this.state.accountOwner}
                               className={"field-content " + (this.isInvalid('accountOwner') ? 'input-error' : '')}
                               onChange={this.handleAccountOwnerChange}
                               onBlur={this.handleBlur('accountOwner')}/>
                        <div><span class="field-name">Account Owner</span></div>
                        <div><span class="error-msg">{this.isInvalid('accountOwner') ? this.state.errors.accountOwner : ''}</span></div>
                    </div>
                </div>

                <div className="row group-section">
                    <div class="col-md-4">
                        <input type="date"
                                className={"field-content " + (this.isInvalid('openDate') ? 'input-error' : '')}
                                value={this.state.openDate}
                                onChange={this.handleOpenDateChange}
                                onBlur={this.handleBlur('openDate')}/>
                        <div><span class="field-name">Open Date</span></div>
                        <div><span class="error-msg">{this.isInvalid('openDate') ? this.state.errors.openDate : ''}</span></div>
                    </div>
                    <div class="col-md-4">
                        <input type="date"
                                className={"field-content " + (this.isInvalid('closeDate') ? 'input-error' : '')}
                                value={this.state.closeDate}
                                onChange={this.handleCloseDateChange}
                                onBlur={this.handleBlur('closeDate')}/>
                        <div><span class="field-name">Close Date</span></div>
                        <div><span class="error-msg">{this.isInvalid('closeDate') ? this.state.errors.closeDate : ''}</span></div>
                    </div>
                </div>

                <div className="row group-section">
                     <div class="col-md-4">
                        <select className={"field-content " + (this.isInvalid('active') ? 'input-error' : '')}
                                value={this.state.active ? "true" : "false"}
                                onChange={this.handleActiveChange}
                                onBlur={this.handleBlur('active')}>

                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <div><span class="field-name">Active</span></div>
                        <div><span class="error-msg">{this.isInvalid('active') ? this.state.errors.active : ''}</span></div>
                     </div>
                </div>

                <div className="row group-section">
                    <div className="col-md-4">
                        <input  type="button" className="btn btn-danger btn-margin"
                                value="Cancel"
                                onClick={this.props.disableEditMode} />
                        <button type="submit"
                                className="btn btn-success"
                                disabled={!this.isSubmitEnabled()}>Save</button>
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </form>
        )
    }
}

EditAccountMgmtForm.defaultProps = {
  board: {
    accountOwner: '',
    openDate: '',
    closeDate: '',
    active: undefined
  }
};

export default EditAccountMgmtForm