
//Global function can be called directly
//Component
//way 1"
var TourKind=".";
var ROLE="NULL";
var TourSite=".";
//---------------------------------------------------------Root------------------------------------------------------------
class Signin extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
            {
                Role: this.props.role
            }
        this.changeRole = this.changeRole.bind(this);
    }
    changeRole()
    {
        this.state.Role=="Local"? this.state.Role="Tourist":this.state.Role="Local";
        ROLE=this.state.Role;
        this.setState(this.state);
    }
    render(){
        return  (
            <div>
                <table id="titile" >
                    <tr>
                        <td width="18px">  </td>
                        <td width="2100px">    <img src={"images/logo.png"} height={"70px"} width={"500px"}/>    </td>
                        <td width="100px"><button onClick={this.changeRole} id="cssRoll" className="block" ><h3>{this.state.Role}</h3></button> </td>
                        <td><div id="my-signin2"></div></td>
                        <td width="100px"><img src="images/city.jpg" width="500" height="333" id="avata" onmouseover="bigImg(this)" onmouseout="normalImg(this)" className="shake"></img></td>
                    </tr>
                </table>
            </div>
        );
    }
}
//----------------------------------------------------------About------------------------------------------------------------
class About extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={ABackImg: 1};
        this.changeBack = this.changeBack.bind(this);
    }
    changeBack()
    {
        this.state.ABackImg=="4"? this.state.ABackImg=1: this.state.ABackImg+=1;
        this.setState(this.state);
    }
    componentDidMount()
    {
        setInterval(this.changeBack,5000)
    }
    render()
    {
        return(
            <div>
                <img src={"images/AB"+this.state.ABackImg+".jpg"} height={"600px"} width={"100%"}/>
                <img src="images/intro.png" id="Intro"/>
                <div id="ab">Welcome to <br/> Scooter Saigon Tour</div>

            </div>
        );
    }
}
//----------------------------------------------------------Tour----------------------------------------
class Site extends React.Component
{
    render()
    {
        return(
            <div>
                <img src="images/site.png"></img>
                <img src="images/pMap.png" className="shake" id="pMapHanoi" onClick={()=>{TourSite="Hanoi"}}></img>
                <img src="images/pMap.png" className="shake" id="pMapSaigon" onClick={()=>{TourSite="Saigon"}}></img>
                <img src="images/pMap.png" className="shake" id="pMapDanang" onClick={()=>{TourSite="Danang"}}></img>
            </div>
        );
    }
}
class Tour_type extends React.Component{
    constructor(props)
    {
        super(props);
        this.chooseTour = this.chooseTour.bind(this);
    }
    chooseTour() {
        TourKind=this.props.type;
    }
    render(){
        return  (
            <div>
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={this.props.image} width="500" height="333" id="imgtour"></img>
                        </div>
                        <div className="flip-box-back">
                            <h2 id="tourname" onClick={this.chooseTour}> {this.props.type}  {this.props.children}</h2>
                            <p>What an amazing city</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Site_Tour extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
            {
                kind: TourKind,
                site: TourSite
            };
        this.updateTK = this.updateTK.bind(this);
    }
    updateTK()
    {
        this.state.kind=TourKind;
        this.state.site=TourSite;
        this.setState(this.state);
    }
    componentDidMount()
    {
        setInterval(this.updateTK,100)
    }
    render(){
        return(
            <div id="sideTourBack">
                <br/><br/><br/>
                <span id="pagesub" > My Tour</span>
                <table width="1800px">
                    <tr>
                        <td width="80px"></td>
                        <td width="700px">
                            <Site/></td>
                        <td width="180px" >
                            <Tour_type type="Beach" image="images/beach.jpg" >Price:45</Tour_type>    <br></br><br></br><br></br>
                            <Tour_type type="City" image="images/city.jpg" >Price: 55</Tour_type>
                            <br></br><br></br><br></br><br></br><br></br>
                            <span id="pagesub" className="block" width="150px"> {this.state.site}</span><br></br><br></br><br></br><br></br><br></br></td>

                        <td width="180px">
                            <Tour_type type="Country" image="images/country.jpg" >Price:50</Tour_type><br></br><br></br><br></br>
                            <Tour_type type="City" image="images/city.jpg" >Price: 55</Tour_type>
                            <br></br><br></br><br></br><br></br><br></br>
                            <span id="pagesub" className="block" width="150px"> {this.state.kind}</span><br></br><br></br><br></br><br></br><br></br></td>
                    </tr>
                </table>
            </div>
        );
    }
}

//-----------------------------------------------------------Contact-----------------------------------------------------------
class IconContact extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
            {
                showLink: ""
            };
        this.ContactDisplay = this.ContactDisplay.bind(this);
    }
    ContactDisplay(IC)
    {
        IC=="facebook"? window.location.href='https://www.facebook.com/dotri.nhan' : alert(this.props.HF);
    }
    render() {
        return (

                <img src={"images/" + this.props.IC + "Icon.png"} width="30" height="30" id="icon" className="shake"  onClick=
                    {()=>this.ContactDisplay(this.props.IC)}>

                </img>

        );
    }
}
class Contact extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
            {
                icon: [
                    {i: "facebook", hf:"https://www.facebook.com/dotri.nhan"},
                    {i: "phone", hf:"01675994743"},
                    {i: "gmail", hf:"xojziyfay@gmail.com"}
                    ]
            };
        this.AddContact = this.AddContact.bind(this);
    }
    AddContact() {

    }
    render() {
        return (
            <div>
                <br/>
                <span id="pagesub">Contact</span>
                <span>
                    {
                        this.state.icon.map(function(icon,index)
                        {
                            return <IconContact key={index} IC={icon.i} HF={icon.hf}/>
                        })
                    }
                </span>
                <br/><br/>
                <iframe width="600" height="315" src="https://www.youtube.com/embed/6A5Z95QT5Pc?rel=0;&autoplay=1"
                        frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <iframe width="600" height="315" src="https://www.youtube.com/embed/9nsKPursiPg" frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <iframe width="600" height="315" src="https://www.youtube.com/embed/cojMK2Zouhg"
                        frameBorder="0" //auto play: ?rel=0;&autoplay=1
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <audio></audio>
            </div>
        );
        /*<span>
                    {
                        this.state.icon.map(function (i,index) {
                            return <img key={index} src={"images/"+i+"Icon.png"} width="30" height="30" className="shake"  id="icon" onClick={() => this.chooseContact.bind(this,index)}></img>
                        })
                    }
                    using map for array , can't edit and catch even
                </span>  */
    }
}





ReactDOM.render(
    <div>
        <Signin role="Local"/>
    </div>
    ,document.getElementById("root"))

ReactDOM.render(
    <div>
        <About/>
    </div>
    ,document.getElementById("about"));
ReactDOM.render(
    <div>
        <Site_Tour/>
    </div>
    ,document.getElementById("tour"));

ReactDOM.render(
    <div>
        <Contact/>
    </div>
    ,document.getElementById("contact"));


