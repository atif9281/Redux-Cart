import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const Dummy_array = [
    {
      id : 'p1',
      price : 6,
      title : 'my first book',
      description : 'this is first book'
      
    },{
      id : 'p2',
      price : 5,
      title : 'my second book',
      description : 'this is second book'
      
    }
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_array.map((product)=><ProductItem
        key = {product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
