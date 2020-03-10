class FormSign extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
            {
                User: "None",
                Pass: "None"
            }
        this.sucessAlert = this.sucessAlert.bind(this);
    }
    sucessAlert()
    {
        this.state.User=this.refs.u.value;
        this.state.Pass=this.refs.p.value;
        this.setState( this.state );
        var aler="You are login successful with user: "+this.state.User +" password: " + this.state.Pass;
        alert(aler);
    }
    render(){
        return(
            <div>

                <h2>Signin</h2>
                <hr />

                <label>Gmail </label>
                <input type="text" ref="u" />
                <br />

                <label>Password </label>
                <input type="text"  />
                <br/>

                <label>Retype </label>
                <input type="text" ref="p" />
                <br />

                <hr />
                <button onClick={this.sucessAlert}>Summit</button>
            </div>);
    }
}