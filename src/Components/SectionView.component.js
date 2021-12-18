const SectionView = ({icon, content}) => {
    return (
        <div className="res-sectionview-flex">
            <div>{icon}</div>
            <p className="lead">{content}</p>
        </div>
    )
}

export default SectionView


