/* eslint-disable react/prop-types */


const FooterItem = ({title, subTitle, description, icon: Icon}) => {
  return (
    <div id="about"  className="space-y-2 flex flex-col items-center">
        <Icon className="size-4 text-yellow-500" />
        <p className="text-white uppercase font-semibold">{title}</p>
        <div className="text-xs text-white text-center">
            <p>{subTitle}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default FooterItem