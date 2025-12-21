import { getDataByIdAsync } from "@features/products/services/products-mock";
import type { Product } from "@features/products/types/product"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type Props = {
  id: Product['id'];
}

export const ProductDetail: React.FC<Props> = ({ id }) => {

  const [product, setProduct] = useState<Product | null>(null);

  const navigate = useNavigate();

  const handleGoBack = (): void => {
    navigate('/products');
  }

  useEffect(() => {
    const load = async ():Promise<void>  => {
      const item: Product | undefined = await getDataByIdAsync(id);
      if(item){
        setProduct(item);
      }
    }
    load()
  }, [id]);

  const labelMap: Record<string, string> = {
    id: 'ID',
    name: 'Name',
    model: 'Model',
    vehicleClass: 'Vehicle Class',
    manufacturer: 'Manufacturer',
    length: 'Length (m)',
    costs: 'Costs (credits)',
    crew: 'Crew',
    passengers: 'Passengers',
    maxSpeed: 'Max Speed (km/h)',
    cargoCapacity: 'Cargo Capacity (kg)',
    consumables: 'Consumables'
  };

  return (
    <div>
      <h3>Product Detail : {product?.name}</h3>
      {product ? (
        <ul>
          {Object.entries(product).map(([key, value]) => (
            <li key={key}>
              <strong>{labelMap[key] || key}:</strong> {value}
            </li>
          ))}
        <button onClick={handleGoBack} >Go back</button>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
