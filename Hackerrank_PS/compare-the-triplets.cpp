vector<int> compareTriplets(vector<int> a, vector<int> b) {
    vector<int> score = {0, 0};
    for (int i = 0; i < a.size(); i++) {
        if (a[i] > b[i]) score[0]++;
        else if(a[i] < b[i]) score[1]++;
    }
    return score;
}