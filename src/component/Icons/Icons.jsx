import './Icons.css'


export default function Icons ({name,image}) {
    return (
        <div className="wrapper">

	{/* <h2><strong>All Games<span>( 4 )</span></strong></h2> */}

	<div className="cards">
		<figure className="card">
			<img src={image} alt='imagen'/>
			<figcaption>{name}</figcaption>
		</figure>

	</div>

</div>
    )
}