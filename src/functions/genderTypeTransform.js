export default function genderTypeTransform(ori) {
  switch (ori) {
    case 'MALE': return 'Male';
    case 'FEMALE': return 'Female';
    case 'OTHER': return 'Other';
    default: return 'Unknown';
  }
}
