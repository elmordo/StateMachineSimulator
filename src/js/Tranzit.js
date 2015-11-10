
function Tranzit(from, to, c)
{
    this.from = from;
    this.to = to;
    this.c = c;
    this.onTranzit = null;
}

Tranzit.prototype.canTranzit = function(c)
{
    return this.c == c;
}

Tranzit.prototype.tranzit = function(c) {
    if (this.onTranzit)
    {
        this.onTranzit(this, c)
    }
};
