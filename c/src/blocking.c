
void BlockAWhile() {
    printf("Blocked.\n");
    for (unsigned long i = 0; i < 1000000000; i ++) {
    }
    printf("Unblocked.\n");
}