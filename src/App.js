import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class calculDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: '', 
      date2:'',
      check:false,
      duree: ''
    };
    this.state = {date2: ''};
    this.state = {check: false};
    this.state = {duree: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

jours_ouverable(startDate, endDate) {
var count = 0;
var curDate = startDate;

while (curDate <= endDate) {
var dayOfWeek = curDate.getDay();
if(!((dayOfWeek === 6) || (dayOfWeek === 0))){
count++;

}
curDate.setDate(curDate.getDate() + 1);
}

return count;
}
  /*
  la fonction jours_ouverable calcul la durrée entre deux date sans tenir compte les weekends
  TODO : ajouter une fonction qui test si un jour est férié ou puis inclure cette 
  fonction dans la fonction jours_ouverable
  
  */

  handleSubmit = event => {
    
    
    event.preventDefault();
    let ouverable = this.state.check;
    let d1= new Date(this.state.date1)
    let d2= new Date(this.state.date2)
    let count=0
   
    let d= Math.abs(Math.abs(d2.getTime()) - Math.abs(d1.getTime()))/(3600000*24)
    if (isNaN(d))
    alert('donner des dates valides');
    
    else if (ouverable===true)  {
        if(d1>d2) {
          alert ('la date 1 doit être supérieur a la date 2' )
        }
        else {
          count= this.jours_ouverable(d1, d2)
          this.setState({duree:'nombre de jours ouverable entre '+ this.state.date1+ " et " +this.state.date2+ " est : "+count}); 
        }
    }
    else 
    this.setState({duree:'nombres de jours entre les deux date choisi :'+d});    
  }
  render() {
    
    return (
      <div id="root">
      <div className="row">
      <div className="col-md-4">
      </div>
      <div className="col-md-4">
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
         Date 1
          <input name="date1" className="form-control" type="date" value={this.state.date1} onChange={this.handleChange} />
        </div>
        <div className="form-group">
         Date 2
         <input name="date2" className="form-control" type="date" value={this.state.date2} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="checkbox" name="check" class="form-check-input" checked={this.state.check} onChange={this.handleChange}/>
          <label class="form-check-label" for="exampleCheck1">Jours ouverable</label>
        </div>
        <div className="form-group">
        <input type="submit" className="btn btn-primary" value="calculer" />
        </div>
      </form>
    
    <div className="panel-body"> {this.state.duree}  </div>

     
   </div>
  </div>    
 </div>
    
    );
  }
}

export default calculDate;
