
function LineStyle (color, width)
{
    this.color = color;
    this.width = width;
}

LineStyle.prototype.setStyle = function(context)
{
    context.lineWidth = this.width;
    context.strokeStyle = this.color;
};