
class Document {
  view() {
    console.log("Viewing the document content...");
  }
}
class DocumentProxy {
  constructor(name, role) {
    this.userName = name;
    this.userRole = role;
    this.document = new Document();
  }

  view() {
    if (this.userRole === 'admin') {
      this.document.view();
    } else {
      console.log(`User Access denied.`);
    }
  }
}

const adminDocument = new DocumentProxy('Kanish', 'admin');
const guestDocument = new DocumentProxy('Kumar', 'guest');

adminDocument.view(); 
guestDocument.view();

