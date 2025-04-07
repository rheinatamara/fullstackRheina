const Heart = ({ color = "#915eff", className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 38 35" 
      className={className} 
      fill={color} 
      width="16"
      height="16"
    >
        <path d="M19 35L16.245 32.4823C6.46 23.5749 0 17.7003 0 10.4905C0 4.6158 4.598 0 10.45 0C13.756 0 16.929 1.54496 19 3.98638C21.071 1.54496 24.244 0 27.55 0C33.402 0 38 4.6158 38 10.4905C38 17.7003 31.54 23.5749 21.755 32.5014L19 35Z"/></svg>
  );
  
  export default Heart;