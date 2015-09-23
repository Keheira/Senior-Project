j=6;
while j==6
    close all
    clear all
thresh=0.01;
%%%the way the program is written, should be able to randomize 
%%%this at this point and still get correct output calculations
vel=30; %%%acoustic velocity of the rock media in m/s
xv=['Velocity of the rock in the area in m/s is ',num2str(vel)];
%%%vel=rand(1,1)*100;
st1=[0.2,0.8];
st2=[0.9,0.4];
st3=[0.4,0.1];
st=[st1;st2;st3];
for k=1:250
figure(1)
plot(st1(1,1)+rand(1,1)*0.1,st1(1,2),'b^')
text(st1(1,1)+0.05+rand(1,1)*0.1,st1(1,2),'S1')
axis([0 1 0 1])
hold on
plot(st2(1,1)+rand(1,1)*0.1,st2(1,2),'ro',st3(1,1)+rand(1,1)*0.1,st3(1,2),'gd')
text(st2(1,1)+0.05+rand(1,1)*0.1,st2(1,2),'S2')
text(st3(1,1)+0.05+rand(1,1)*0.1,st3(1,2),'S3')
hold off
end

figure(1)
plot(st1(1,1),st1(1,2),'b^')
text(st1(1,1)+0.05,st1(1,2),'S1')
axis([0 1 0 1])
hold on
plot(st2(1,1),st2(1,2),'ro',st3(1,1),st3(1,2),'gd')
text(st2(1,1)+0.05,st2(1,2),'S2')
text(st3(1,1)+0.05,st3(1,2),'S3')
hold off
xlabel(xv); 
%eq=[0.5469,0.9575];
eq=rand(1,2);
% hold on
% plot(eq(1,1),eq(1,2),'kx')
% hold off

dist=sqrt(sum((st-ones(3,1)*eq).^2,2));
t=dist./vel;
r1=t(1);
r2=t(2);
r3=t(3);
dr=1000000;
while dr>=thresh
    figure(1)
plot(st1(1,1),st1(1,2),'b^')
text(st1(1,1)+0.05,st1(1,2),'S1')
axis([0 1 0 1])
hold on
plot(st2(1,1),st2(1,2),'ro',st3(1,1),st3(1,2),'gd')
text(st2(1,1)+0.05,st2(1,2),'S2')
text(st3(1,1)+0.05,st3(1,2),'S3')
hold off
title('Stations and Readings')
xlabel(xv); 
d1=-1;
while d1<0
    a1=['Time to Station #1 is ',num2str(r1)]
d1=input('How far away is the epicenter from Station #1?');
figure(1)
hold on
eqn=['(x-',num2str(st(1,1)),')^2 + (y-',...
    num2str(st(1,2)),')^2-',...
    num2str(d1^2)];
ezplot(eqn)
axis([0 1 0 1])
xlabel(xv); 
end
d2=-1;
while d2<0
    a1=['Time to Station #2 is ',num2str(r2)]
d2=input('How far away is the epicenter from Station #2?');
figure(1)
eqn=['(x-',num2str(st(2,1)),')^2 + (y-',...
    num2str(st(2,2)),')^2-',...
    num2str(d2^2)];
ezplot(eqn)
axis([0 1 0 1])
xlabel(xv); 
end
d3=-1;
while d3<0
    a3=['Time to Station #3 is ',num2str(r3)]
d3=input('How far away is the epicenter from Station #3?');
figure(1)
eqn=['(x-',num2str(st(3,1)),')^2 + (y-',...
    num2str(st(3,2)),')^2-',...
    num2str(d3^2)];
ezplot(eqn)
axis([0 1 0 1])
xlabel(xv); 
end
hold off

d=[d1;d2;d3];

figure(2)
for i=1:3
eqn=['(x-',num2str(st(i,1)),')^2 + (y-',...
    num2str(st(i,2)),')^2-',...
    num2str(d(i)^2)];
ezplot(eqn)
axis([0 1 0 1])
xlabel(xv); 
hold on
end
plot(st2(1,1),st2(1,2),'ro',st3(1,1),st3(1,2),'gd')
plot(st1(1,1),st1(1,2),'b^')
text(st1(1,1)+0.05,st1(1,2),'S1')
text(st2(1,1)+0.05,st2(1,2),'S2')
text(st3(1,1)+0.05,st3(1,2),'S3')
title('Your suggested epicenter of the earthquake')
hold off


% xlabel('Using the mouse, carefully click on the intersection of the curves, and record the values');
% results=ginput(1)
% dr=sqrt(sum((results-eq).^2));
% ['You were ',num2str(dr), ' units off from the true epicenter']

xlabel('Please enter the coordinates that you found for the epicenter, as [x,y]');
results2=input('Please enter the coordinates that you found for the epicenter, as [x,y]')
dr=sqrt(sum((results2-eq).^2));
figure(1)
hold on
plot(results2(1,1),results2(1,2),'mo')
%text(results2(1,1)+0.05,results2(1,2),'Your location')
hold off
['You were ',num2str(dr), ' units off from the true epicenter']


if dr<=thresh
    ['Good Job!!!']
    ['You entered: ',num2str(results2)]
    ['The true location was: ',num2str(eq)]
    figure(1)
    hold on
    plot(eq(1,1),eq(1,2),'kx')
    %text(eq(1,1),eq(1,2),'True location')
    hold off
    
    %%%%solution:
figure(2)
for i=1:3
eqn=['(x-',num2str(st(i,1)),')^2 + (y-',...
    num2str(st(i,2)),')^2-',...
    num2str(dist(i)^2)];
ezplot(eqn)
axis([-1 2 -1 2])
hold on
end
plot(eq(1,1),eq(1,2),'kx')
plot(st2(1,1),st2(1,2),'ro',st3(1,1),st3(1,2),'gd')
plot(st1(1,1),st1(1,2),'b^')
title('Epicenter of Earthquake')
hold off
else
    ['Try Again']
    ['You entered: ',num2str(results2)]
end
end

p=input('Would you like to do this again? Enter y/n ', 's');
if p=='n' | p=='no'
    j=7;
end
end

    





