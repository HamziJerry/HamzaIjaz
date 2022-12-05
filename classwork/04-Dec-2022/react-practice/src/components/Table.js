const Table = (props) => {

  const handleDelete = (e) => {
    let index = e.target.parentNode.getAttribute('data-index');
    let arr = [...props.state];
    if(index !== -1) {
      arr.splice(index, 1);
      props.setState(arr);
    }
  }

  return (
    <table className="table table-striped">
      <thead className={`bg-${props.headerBg}`}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{props.header}</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.state.length > 0 ? (
          props.state.map((el, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{el}</td>
                <td>
                  <button onClick={handleDelete} className="btn btn-danger" type="button" data-index={index}>
                    <i className="fas fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <th scope="row">Note:</th>
            <td>No Data</td>
            <td>No Action</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
