import java.io.*;
import java.util.*;

public class Epicenter{
	public static void main(String[] args){
	int vel = 10; //meters per second
	double timeA, timeB, timeC, d, inputX, inputY;
	double Ax, Ay, Bx, By, Cx, Cy, Ex, Ey;
	Random rand;
	Scanner input = new Scanner(System.in);

	/*Rndomize center points*/
	//center A location
	Ax = rand.nextDouble(1,11);
	Ay = rand.nextDouble(1,11);
	//center B location
	Bx = rand.nextDouble(1,11);
	By = rand.nextDouble(1,11);
	//center C location
	Cx = rand.nextDouble(1,11);
	Cy = rand.nextDouble(1,11);
	//epicenter location
	Ex = rand.nextDouble(1,11);
	Ey = rand.nextDouble(1,11);

	//display centers in GUI

	//shake screen to show earthquake

	//get time to center A
	distance = Math.sqrt(Math.pow(Ax-Ex, 2)+Math.pow(Ay-Ey, 2));
	timeA = distance/vel;

	//get time to center B
	distance = Math.sqrt(Math.pow(Ax-Ex, 2)+Math.pow(Ay-Ey, 2));
	timeB = distance/vel;

	//get time to center C
	distance = Math.sqrt(Math.pow(Ax-Ex, 2)+Math.pow(Ay-Ey, 2));
	timeC = distance/vel;

	//user input
	System.out.print("What is the x coordinate of the epicenter: ");
	inputX = input.nextDouble();
	System.out.print("What is the y coordinate of the epicenter: ");
	inputY = input.nextDouble();

	//check input
	if((inputX == Ex) && (inputY == Ey)) System.out.println("Correct");
	System.out.println("Please try again");
}
