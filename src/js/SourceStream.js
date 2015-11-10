
function SourceStream (data)
{
    this._data = data.slice();

    this._pointer = 0;
    this._length = this._data.length;
}

SourceStream.SEEK_CUR = 1;
SourceStream.SEEK_BEG = 2;
SourceStream.SEEK_END = 3;

SourceStream.prototype.eos = function()
{
    return this._pointer == this._length;
};

SourceStream.prototype.get = function()
{
    // test position
    if (this._pointer == this._length)
    {
        throw "End of stream has been reached";
    }

    return this._data[this._pointer++];
};

SourceStream.prototype.getLength = function()
{
    return this._length;
};

SourceStream.prototype.getPointer = function()
{
    return this._pointer;
};

SourceStream.prototype.peek = function()
{
    return this._data[this._pointer];
};

SourceStream.prototype.seek = function(offset, method) {
    if (method === undefined)
    {
        method = SourceStream.SEEK_CUR;
    }

    switch (method)
    {
    case SourceStream.SEEK_BEG:
        this._pointer = offset;
        break;

    case SourceStream.SEEK_END:
        this._pointer = this._length + offset;
        break;

    case SourceStream.SEEK_CUR:
        this._pointer += offset;
        break;

    default:
        throw "Invalid seek method";
    }

    // test cursor positiion
    if (this._pointer < 0 || this._pointer > this._length)
    {
        throw "Invalid pointer position";
    }
};
