let nilai = 'C';
switch (nilai) {
    case 'A':
        console.log(`anda mendapat nilai ${nilai}`);
        break;
    case 'B':
        console.log(`anda mendapat nilai ${nilai}`);
        break
    case 'C':
        console.log(`anda mendapat nilai ${nilai}`);
        break
    case 'D':
        console.log(`anda mendapat nilai ${nilai}`);
        break
    default:
        console.log('anda tidak lulus');
}

nilai = 'A';
switch (nilai) {
    case 'A':
        console.log('anda lulus dengan nilai sempurna');
        break;
    case 'B':
    case 'C':
        console.log("selamat anda lulus");
        break
    default:
        break;
}