import React from 'react'
  
const ProgressBar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 10
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
      
      const progresspercent = {
        color: 'black',
        fontWeight: 600,
        fontSize: 16,
        margin: 10
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresspercent}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default ProgressBar;