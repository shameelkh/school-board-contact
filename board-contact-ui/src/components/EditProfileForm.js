import React from 'react'

const EditProfileForm = () => {
 <form>
            <div class="form-group row">
              <label class="col-md-2 col-form-label">Address</label>
              <div class="col-md-4">
                <input disabled type="text" class="form-control" value={board.address.street + ', ' + board.address.city + ', ' + board.address.postalCode}/>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-2 col-form-label">Phone</label>
              <div class="col-md-4">
                <input disabled type="text" class="form-control" value={board.phoneNumber}/>
              </div>

              <label class="col-md-2 col-form-label">Website</label>
              <div class="col-md-4">
                <input disabled type="text" class="form-control" value={board.website}/>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-2 col-form-label">Open Time</label>
              <div class="col-md-4">
                <input disabled type="text" class="form-control" value={board.openTime}/>
              </div>
              <label class="col-md-2 col-form-label">Close Time</label>
                <div class="col-md-4">
                <input disabled type="text" class="form-control" value={board.closeTime}/>
              </div>
            </div>

            <div class="form-group row">
                <button class="btn btn-success float-left">Edit</button>
            </div>
          </form>
}

export default EditProfileForm