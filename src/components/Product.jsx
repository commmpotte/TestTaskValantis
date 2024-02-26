import 'bootstrap/dist/css/bootstrap.min.css'

function Product({ id, product, brand, price }) {
  return (
    <div className="card border rounded-2 m-2 p-1 w-1">
      <div className="card-body">
        <h6 className="card-title  text-muted">Product: {product}</h6>
        <p className="card-subtitle">ID: {id}</p>
        {brand && <p className="card-text m-0">Brand: {brand}</p>}{' '}
        <p className="card-text">Price: {price}</p>
      </div>
    </div>
  )
}

export default Product
