interface TitleProps {
    title: string
}
const Title = ({title} : TitleProps) =>{
    return(
        <h2 className="uppercase font-bold pt-5 mb-5 text-center text-3xl mt-2">
            {title}
        </h2>
    )
}

export default Title