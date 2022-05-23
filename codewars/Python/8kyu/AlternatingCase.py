# Solution : Swap Upper to Lower and Lower to Upper

def to_alternating_case(string):
    elements = [s.upper() if (s == s.lower()) else s.lower() for idx, s in enumerate(string)]
    elements = "".join(elements)
    return elements