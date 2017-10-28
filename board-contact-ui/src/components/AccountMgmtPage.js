import React from 'react'

const AccountMgmtPage = (boardInfo) => {
    let board = boardInfo.board

    if (board === undefined) {
        return (<div></div>)
    }

    return (
        <div className="row">
            <form>
                <div class="form-group row">
                  <label class="col-md-2 col-form-label">Account Owner</label>
                  <div class="col-md-4">
                    <input disabled type="text" class="form-control" value={board.accountOwner}/>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-2 col-form-label">Open Date</label>
                  <div class="col-md-4">
                    <input disabled type="text" class="form-control" value={board.openDate}/>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-2 col-form-label">Close Date</label>
                  <div class="col-md-4">
                    <input disabled type="text" class="form-control" value={board.closeDate}/>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-md-2 col-form-label">Active</label>
                  <div class="col-md-4">
                    <input disabled type="text" class="form-control" value={board.isActive ? 'Yes' : 'No'}/>
                  </div>
                </div>
            </form>
        </div>
    )
}

export default AccountMgmtPage