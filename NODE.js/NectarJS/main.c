#include <stdio.h>
typedef short int16_t;
static int16_t a;
static int16_t b;
static int16_t c;
int main(void) {
    a = 5;
    b = 6;
    c = a + b;
    printf("%d\n", c);

    return 0;
}
