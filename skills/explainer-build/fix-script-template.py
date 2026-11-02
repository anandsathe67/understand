"""Exact-string fix pass for a single-file HTML page.

Usage: python3 -I fix.py path/to/index.html

Each (old, new) pair must match exactly once; the assert catches a stale
or ambiguous `old` before anything is written. Copy `old` from the file
verbatim, including tags and entities. Keep a backup of the page first.
"""
import sys

path = sys.argv[1]
s = open(path, encoding="utf8").read()

R = [
    # ("exact text as it appears in the file", "replacement"),
]

for old, new in R:
    c = s.count(old)
    assert c == 1, (c, old[:80])
    s = s.replace(old, new)

open(path, "w", encoding="utf8").write(s)
print("applied", len(R), "fixes to", path)
