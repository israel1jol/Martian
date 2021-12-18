const Section = ({icons, descrs, bg}) => {
    console.log(descrs)
    return (
        <div className={`bg-${bg}`}>
            <div className="res-section-flex p-5 text-center">
               {descrs.map((descr, i) => (
                   <div key={i}>
                    {icons[i]}
                    <p className="lead">{descr}</p>
                   </div>
               ))}
            </div>
        </div>
    )
}

export default Section