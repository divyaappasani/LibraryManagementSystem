function Spread()
{
    var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
    var [first, , third, ...last] = planets;//Spread Operator
    console.log(first);//Mercury
    console.log(third);//Venus
    console.log(last);//Mars,Pluto,Saturn
 
    var a, b;
    [a, b] = ["Male", "Female"];
    [a, b] = [b, a];
    console.log(a);//Female
    console.log(b);//Male
    
 
    
    return (
        <h1>Spread Operator</h1>
 
    );
}
export default Spread