
srcjsdir = src/js/
srchtmldir = src/html/
outdir = build/

files = $(srcjsdir)*

all: ${files}
	cat $^ > ${outdir}machine.js
	cp ${srchtmldir}* $(outdir)

clean:
	rm $(outdir)*