var Main = React.createClass({
  loadDataFromServer: function() {
    $.ajax({
      async:false,
      url: './../data/table.json',
      dataType: 'json',
      success: function(data) {
        this.setState({tableData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },
  componentWillMount: function() {
    this.loadDataFromServer();

  },
  render: function() {
    tableData = this.state.tableData
    return (
    <div>
      <Navbar />
      <Jumbotron />
      <Table  tableData ={tableData}/>
    </div>
    );
  }
});

var Navbar = React.createClass({

  render: function() {
    return (
      <div className="header">
        <ul className="nav nav-pills pull-right" role="tablist">
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">About</a></li>
          <li role="presentation"><a href="#">Contact</a></li>
        </ul>
        <h3 className="text-muted">ReactJS 101</h3>
      </div>
    );
  }
});

var Jumbotron = React.createClass({
  btnClick: function() {
    return alert('hello');
  },
  render: function() {
    return (
      <div className="jumbotron">
        <h1>ReactJS example</h1>
        <p>Using react to build Bootstrap Jumbotron</p>
        <p>
          <a className="btn btn-lg btn-primary" role="button"  onClick={this.btnClick}>Hello</a>
        </p>
      </div>
    );
  }
});
var Table = React.createClass({

  render: function() {
    tableName = this.props.tableData.name;
    tableLists = this.props.tableData.datasets;
    var tableLists = tableLists.map(function(value, index) {
       return (
         <tr>
           <td>{value.id}</td>
           <td>{value.name}</td>
           <td>{value.type}</td>
         </tr>
       );
     });
    return (
      <div>
      <h2>{tableName}</h2>
      <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {tableLists}
      </tbody>
    </table>
    </div>
    );
  }
});


React.render(

  <Main />,
  document.getElementById('app')
);
