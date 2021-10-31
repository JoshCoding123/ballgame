class circle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		console.log(this.body)
		

	}
	display()
{
			
			var circlepos=this.body.position;		


	  push()	
      strokeWeight(4)
     fill("red")
    ellipseMode(RADIUS);
    ellipse(circlepos.x, circlepos.y, this.r);

    
			pop()
			
	}

}