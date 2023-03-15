function store(name){
    colors = colors.concat(name.TriangleVertexColors);
    normals = normals.concat(name.TriangleNormals);
    points = points.concat(name.TriangleVertices);
}

function Polycylinder(color, xpos, ypos, zpos, xrot, yrot, zrot, scale){
    var data = {};
    var base = cylinder(36, 1, true, color); //Right arm rest
    base.scale(scale, scale, scale);
    base.rotate(xrot, [1, 0, 0]); //X rot
    base.rotate(yrot, [0, 1, 0]); //Y rot
    base.rotate(zrot, [0, 0, 1]); //Z rot
    // Spawn cylinder's center at old top
    base.translate(xpos, ypos, zpos);
    //Shift cylinder so bottom touches old top

    store(base);

    var connect = sphere(4, color);

    connect.scale(scale/2, scale/2, scale/2);

    connect.translate(base.TopCenter[0], base.TopCenter[1], base.TopCenter[2]);

    data.tc = base.TopCenter;
    data.bc = base.BotCenter;
    store(connect);
    return data;
}