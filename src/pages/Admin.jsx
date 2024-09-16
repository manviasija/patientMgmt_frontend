function adminlogin(){
    return(
        <div>
      
        <form>
        <div className="card">
        <h3>Login here!</h3>
        <div className="form-group row">

            <label for="id">
                User ID
            </label>
            <div className="col-sm-20">
            <input type="text" name="id"></input>
            </div>
        </div>
        <div className="form-group row">
            
            <label for="password">
                Password
            </label>
            <div className="col-sm-20">
            <input type="password" name="password"></input>
            </div>
            </div>
            <br></br>

       

        <div className="col-sm-20">
            <input type="submit" value="Login" />
        </div>
        </div>
        </form>
        </div>  
    );
}
export default adminlogin;