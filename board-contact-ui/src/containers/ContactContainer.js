import React from 'react'

class ContactContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {!this.props.inEditMode &&
                    <Contact
                        contact={this.props.contact}
                        enableEditMode={this.props.enableEditMode}
                        isExpanded={this.props.isExpanded}
                        handleExpand={this.props.handleExpand} />
                }
            </div>
        )
    }
}