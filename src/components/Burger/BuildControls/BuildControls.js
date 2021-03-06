import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
  {label: 'Salad', type: 'salad'},  
  {label: 'Cheese', type: 'cheese'},  
  {label: 'Meat', type: 'meat'},  
  {label: 'Bacon', type: 'bacon'}
]

export const BuildControls = (props) =>{
  return (
    <div className={classes.BuildControls}>
      <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={()=> props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}/>
      ))}
      <button 
      className={classes.OrderButton} 
      disabled={props.purchasable}
      onClick={props.ordered}>ORDER NOW</button>
    </div>
  )
}