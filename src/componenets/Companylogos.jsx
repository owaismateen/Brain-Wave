import { companyLogos } from "../constants"

const Companylogos = ( {className} ) => {
  return (
    <div className={className}>
    <h5 className="tagline mb-6 text-center text-n-1/50">HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</h5>
    <ul className="flex">
        {companyLogos.map((logo, index) => 
        <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
            <img src={logo} width={134} height={28} alt={logo} />
        </li>
        )}
    </ul>
    
    </div>
  )
}

export default Companylogos
