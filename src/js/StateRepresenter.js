
function StateRepresenter (state)
{
    this.state = state;
    this.x = 0;
    this.y = 0;
    this.r = 15;

    this.normalStyle = new LineStyle("#000000", 2);
    this.activeStyle = new LineStyle("#ff000", 2);
    this.finalStyle = new LineStyle("#000000", 4);
    this.finalActiveStyle = new LineStyle("#ff0000", 4);
}

StateRepresenter.prototype.render = function(context)
{
    // select line style
    var lineStyle;

    if (this.state.isActive())
    {
        lineStyle = this.state.isFinal() ? this.finalActiveStyle : this.activeStyle;
    }
    else
    {
        lineStyle = this.state.isFinal() ? this.finalStyle : this.normalStyle;
    }

    lineStyle.setStyle(context);

    // draw circle and write name of state
    context.beginPath()
    context.arc(this.x, this.y - 5, this.r, 0, 2 * Math.PI);
    context.stroke()
    context.fillText(this.state.name, this.x - this.r / 2, this.y);
};
