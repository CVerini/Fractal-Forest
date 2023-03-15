
var stringGen1 = function(iterations, string, degrees, xpos, ypos, zpos, length){
    var FF = 'F-[-F+F]+[+F-F]&&[|F^F]';
    var RF = '[//F\\F]';
    var len = string.length;
    var newstring = string;
    var l = length;
    var x = xpos;
    var y = ypos;
    var z = zpos;
    var start = '';
    var end = '';
    for(var i = 0; i<len; i++){
        if(newstring[i] == 'F') {
            start = newstring.substring(0, i+1);
            end = newstring.substring(i+1, len);
            newstring = start+FF+end;
            len+=FF.length;
            i+=FF.length;
        }
        if(newstring[i] == '|') {
            start = newstring.substring(0, i+1);
            end = newstring.substring(i+1, len);
            newstring = start+RF+end;
            len+=RF.length;
            i+=RF.length;
        }
    }
    iterations--;
    if(iterations>0) stringGen1(iterations, newstring, degrees, x, y, z, l);
    else readString(newstring, degrees, x, y, z, l, 0, 0, 0, purp);

}

var stringGen2 = function(iterations, string, degrees, xpos, ypos, zpos, length){
    var FF = '/F[|\\\\F]/F[/F/F]';
    var F = '[&F|^-F]';
    var len = string.length;
    var newstring = string;
    var l = length;
    var x = xpos;
    var y = ypos;
    var z = zpos;
    var start = '';
    var end = '';
    for(var i = 0; i<len; i++){
        if(newstring[i] == 'F') {
                start = newstring.substring(0, i + 1);
                end = newstring.substring(i + 1, len);
                newstring = start + FF + end;
                len += FF.length;
                i += FF.length;
        }
        if(newstring[i] == '^') {
            start = newstring.substring(0, i + 1);
            end = newstring.substring(i + 1, len);
            newstring = start + F + end;
            len += F.length;
            i += F.length;
        }
    }
    iterations--;
    if(iterations>0) stringGen2(iterations, newstring, degrees, x, y, z, l);
    else readString(newstring, degrees, x, y, z, l, 0, 0, 0, white);

}

var stringGen3 = function(iterations, string, degrees, xpos, ypos, zpos, length){
    var FF = '++//^^F^[^F+F]-[+F&F]//[|\\F^F]';
    var RF = '//+&&F[-/F\\F]';
    var len = string.length;
    var newstring = string;
    var l = length;
    var x = xpos;
    var y = ypos;
    var z = zpos;
    var start = '';
    var end = '';
    for(var i = 0; i<len; i++){
        if(newstring[i] == '-') {
            start = newstring.substring(0, i+1);
            end = newstring.substring(i+1, len);
            newstring = start+FF+end;
            len+=FF.length;
            i+=FF.length;
        }
        if(newstring[i] == '|') {
            start = newstring.substring(0, i+1);
            end = newstring.substring(i+1, len);
            newstring = start+RF+end;
            len+=RF.length;
            i+=RF.length;
        }
    }
    iterations--;
    if(iterations>0) stringGen3(iterations, newstring, degrees, x, y, z, l);
    else readString(newstring, degrees, x, y, z, l, 0, 0, 0, blue);

}

var stringGen4 = function(iterations, string, degrees, xpos, ypos, zpos, length){
    var FF = '\\F[++^F][|F+&F]//&-[F]';
    var F = '[|^+FF]';
    var len = string.length;
    var newstring = string;
    var l = length;
    var x = xpos;
    var y = ypos;
    var z = zpos;
    var start = '';
    var end = '';
    for(var i = 0; i<len; i++){
        if(newstring[i] == 'F') {
            start = newstring.substring(0, i+1);
            end = newstring.substring(i+1, len);
            newstring = start+FF+end;
            len+=FF.length;
            i+=FF.length;
        }
        if(newstring[i] == '|') {
            start = newstring.substring(0, i+1);
            end = newstring.substring(i+1, len);
            newstring = start+F+end;
            len+=F.length;
            i+=F.length;
        }
    }
    iterations--;
    if(iterations>0) stringGen4(iterations, newstring, degrees, x, y, z, l);
    else readString(newstring, degrees, x, y, z, l, 0, 0, 0, blue);

}

var stringGen5 = function(iterations, string, degrees, xpos, ypos, zpos, length){
    var FF = 'F-[/F&F]+[\\F-F]&&[|F^F]';
    var RF = '[/-F&F]';
    var len = string.length;
    var newstring = string;
    var l = length;
    var x = xpos;
    var y = ypos;
    var z = zpos;
    var start = '';
    var end = '';
    for(var i = 0; i<len; i++){
        if(newstring[i] == 'F') {
            start = newstring.substring(0, i+1);
            end = newstring.substring(i+1, len);
            newstring = start+FF+end;
            len+=FF.length;
            i+=FF.length;
        }
        if(newstring[i] == '|') {
            start = newstring.substring(0, i+1);
            end = newstring.substring(i+1, len);
            newstring = start+RF+end;
            len+=RF.length;
            i+=RF.length;
        }
    }
    iterations--;
    if(iterations>0) stringGen5(iterations, newstring, degrees, x, y, z, l);
    else readString(newstring, degrees, x, y, z, l, 0, 0, 0, purp);

}

//colors
var blue = [0.0,0.1,0.7,1];
var white = [1,1,1,1];
var blood = [0.7,0,0,1];
var purp = [76/255, 0, 153/255, 1.0];
var darkpurp = [25/255, 0, 51/255, 1.0];
var sky = [0, 0, 50/255, 1]

var readString = function(string, degrees, x, y, z, length, rx, ry, rz, color){
    console.log(string);
    var len = length;
    var angle = degrees;
    var xpos = x;
    var ypos = y;
    var zpos = z;
    var rot = [rx, ry, rz];
    var pc = null;
    var px = 0;
    var py = 0;
    var pz = 0;
    var stacks = 0;
    var T = [];

    for (var i = 0; i<string.length; i++){
        switch (string[i]) {
            case 'F':
                //move forward 'length' while drawing
                pc = Polycylinder(color, xpos, ypos, zpos, rot[0], rot[1], rot[2], len);

                px = xpos;
                py = ypos;
                pz = zpos;

                xpos = pc.tc[0];
                ypos = pc.tc[1];
                zpos = pc.tc[2];

                len /= 1.2;

                break;
            case 'f':
                //move forward 'length' without drawing
                xpos = xpos+xpos-px;
                ypos = ypos+ypos-py;
                zpos = zpos+zpos-pz;
                break;
            case '+':
                //apply positive x rotation
                rot[0]+=angle;
                break;
            case '-':
                //apply negative x rotation
                rot[0]-=angle;
                break;
            case '&':
                //apply positive y rotation
                rot[1]+=angle;
                break;
            case '^':
                //apply negative y rotation
                rot[1]-=angle;
                break;
            case '\\':
                //apply positive z rotation
                rot[2]+=angle;
                break;
            case '/':
                //apply negative z rotation
                rot[2]-=angle;
                break;
            case '|':
                //rotate 180 degrees
                rot[1]+=180;
                break;
            case '[':
                //push current state of turtle onto a pushdown stack
                T[stacks] = [xpos, ypos, zpos, len, rot[0], rot[1], rot[2]];
                stacks++;


                break;
            case ']':
                //pop the state from the top of the turtle stack and make it the current turtle stack
                stacks--;
                xpos = T[stacks][0];
                ypos = T[stacks][1];
                zpos = T[stacks][2];
                len = T[stacks][3];
                rot[0] = T[stacks][4];
                rot[1] = T[stacks][5];
                rot[2] = T[stacks][6];
                break;


        }
    }
}
