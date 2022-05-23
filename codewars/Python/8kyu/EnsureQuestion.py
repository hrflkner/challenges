# Solution : Conditionals

def ensure_question(s):
    if s == '':
        return '?'
    elif s[-1] == '?':
        return s
    else:
        return s + '?'