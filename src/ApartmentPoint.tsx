import { makeStyles } from "@material-ui/styles"

type ApartmentPonitProps = {
  price: number
  onClick: () => void
}

const styles = makeStyles({
  root:{
    background: 'white',
    borderRadius: '12px',
    padding: '8px',
    width: '-webkit-max-content',
    zIndex: 1000,
    position: 'relative',
    fontFamily: 'helvetica',
    fontSize: '15px'
    // border: 'none'
  }
})

const ApartmentPoint = (props: ApartmentPonitProps) => {
  const classes = styles()
  return (
    <div className={classes.root} onClick={props.onClick}>
      <b>{props.price} $</b>

    </div>
  )
}

export default ApartmentPoint
