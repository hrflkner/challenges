# Solution

def reverse_words(s):
    s = s.split(" ")
    return ' '.join(list(reversed(s)))