#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <stdio.h>
#include <limits.h>
typedef short int16_t;
#define STR_INT16_T_BUFLEN ((CHAR_BIT * sizeof(int16_t) - 1) / 3 + 2)
void str_int16_t_cat(char *str, int16_t num) {
    char numstr[STR_INT16_T_BUFLEN];
    sprintf(numstr, "%d", num);
    strcat(str, numstr);
}

struct this_t {
    void * x;
    void * y;
};

void func(struct this_t * this)
{
    char * null = NULL;
    null = malloc(15 + 15 + 1);
    assert(null != NULL);
    null[0] = '\0';
    strcat(null, "[object Object]");
    strcat(null, "[object Object]");
    return null;

}
void Particle(struct this_t * this, /* Cannot determine variable type from source null*/ x, /* Cannot determine variable type from source null*/ y)
{
    this->x = x;
    this->y = y;
    this->returnAdded = func;

}

int main(void) {

    return 0;
}
