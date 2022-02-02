from utils import add


class TestAdd:
    def __init__(self):
        print("init")

    def test_add(self):
        return 5


def fn():
    print("test")
    x = 5
    return x+2


print(add(1, 2))
