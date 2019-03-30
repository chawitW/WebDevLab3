class Form {
    constructor(subject, name, email, phone, gender, message) {
      this.subject = subject;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.gender = gender;
      this.message = message;
    }
  }
  
  // 2. UI Class: Handle UI Tasks
  class UI {
    static displayForm() {
  // 3. predefined books
  //     const StoredBooks = [
  //       {
  //         title: 'Book One',
  //         author: 'John Boe',
  //         isbn: '11111111'
  //       },
  //       {
  //         title: 'Book One',
  //         author: 'John Boe',
  //         isbn: '11111111'
  //       }
  //     ];
  //     const books = StoredBooks;
       
      const form = Store.getForm();
  
      form.forEach((form) => UI.addFormToList(form));
    }
  
  // 4. add book
    static addFormToList(form) {
      const list = document.querySelector('#my-form');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${form.subject}</td>
        <td>${form.name}</td>
        <td>${form.email}</td>
        <td>${form.phone}</td>
        <td>${form.gender}</td>
        <td>${form.message}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete"> X </a></td>
      `;
  
      list.appendChild(row);
    }
  
  // 11. delete book  
    static deleteForm(el) {
      // if element contains .delete class
      if(el.classList.contains('delete')) {
      // remove <a> -> <td> -> <tr>       
        el.parentElement.parentElement.remove();
      }
    }
  
  // 13. show alert  
  // <div class="alert alert-success/alert-danger>Message</div>
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#my-form');
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
  // 9. clear fields  
    static clearFields() {
      document.querySelector('#subject').value = '';
      document.querySelector('#name').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#phone').value = '';
      document.querySelector('#message').innerHTML = '';
      document.querySelector('#gender').value = '';
    }
  }
  
  // Store Class: Handles Storage
  class Store {
    static getForm() {
      let form;
      if(localStorage.getItem('form') === null) {
        form = [];
      } else {
        form = JSON.parse(localStorage.getItem('form'));
      }
  
      return form;
    }
  
    static addForm(form) {
      const form = Store.getForm();
      books.push(book);
      localStorage.setItem('form', JSON.stringify(form));
    }
  
    static removeForm(email) {
      const form = Store.getForm();
  
      books.forEach((form, index) => {
        if(book.email === email) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('form', JSON.stringify(form));
    }
  }
  
  // 4. Event: Display Books
  document.addEventListener('DOMContentLoaded', UI.displayForm);
  
  // 5. Event: Add a Book
  document.querySelector('#my-form').addEventListener('submit', (e) => {
    // 7. Prevent actual submit action
    e.preventDefault();
  
    // Get form values
    const subject = document.querySelector('#subject').value;
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const gender = document.querySelector('#male').value;
    const message = document.querySelector('#message').innerHTML;
  
    // 12. Validate
    if(subject === '' || name === '' || email === '' || phone ==='' || gender === '' || message === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      // 6. Instatiate book
      const form = new Form(subject, name, email, phone, gender, message);
      // console.log(book);
  
      // 8. Add Book to UI
      UI.addFormToList(form);
  
      // Add book to store
      Store.addForm(form);
  
      // 13. Show success message
      UI.showAlert('Form Added', 'success');
  
      // 9. Clear fields
      UI.clearFields();
    }
  });
  
  // 10. Event: Remove a Book - event propagation by selecting the parent
  document.querySelector('#my-form').addEventListener('click', (e) => {
    // console.log(e.target);
    
    // 11. Remove book from UI
    UI.deleteForm(e.target);
  
    // Remove book from store
    Store.removeForm(e.target.parentElement.previousElementSibling.textContent);
  
    // 13. Show success message
    UI.showAlert('Form Removed', 'success');
  });
  