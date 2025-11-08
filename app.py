import streamlit as st

st.set_page_config(
    page_title="UniBuddy University Helpdesk",
    page_icon="🎓",
    layout="centered"
)

st.markdown(
    '''<div style="text-align:center;">
        <img src="https://imgs.search.brave.com/-TlvheF1PPLf8NdHNd5sbdo-j1mQIumncQnSoF68wtw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vdmJxb3cv/TUFHMXZNdmJxb3cv/MS90bC9jYW52YS1l/ZHVjYXRpb24taWNv/bi1NQUcxdk12YnFv/dy5wbmc" width="72" height="72" style="border-radius:50%; margin-bottom:10px;">
    </div>''',
    unsafe_allow_html=True
)
st.markdown('<h1 style="text-align:center; color:#25356b; margin-top:0; font-size:2.1rem; letter-spacing:0.5px;">Welcome to UniBuddy, your university helpdesk!</h1>', unsafe_allow_html=True)
st.markdown('<div style="color:#475072; text-align:center; margin-bottom:18px; font-size:1rem;"><strong>Ask me about admissions, course registration, campus life, fees, and more!</strong></div>', unsafe_allow_html=True)

quick_link_html = '''
<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom:18px;">
  <a class="quick-link" style="background: #262730; border: 1px solid #262730; border-radius: 14px; padding: 8px 16px; text-decoration: none; color: #2954d6; margin:2px; display: inline-block; font-weight:500; box-shadow:0 1px 2px rgba(60,80,130,0.04);" href="#">Apply for Admission</a>
  <a class="quick-link" style="background: #262730; border: 1px solid #262730; border-radius: 14px; padding: 8px 16px; text-decoration: none; color: #2954d6; margin:2px; display: inline-block; font-weight:500; box-shadow:0 1px 2px rgba(60,80,130,0.04);" href="#">Exam Schedule</a>
  <a class="quick-link" style="background: #262730; border: 1px solid #262730; border-radius: 14px; padding: 8px 16px; text-decoration: none; color: #2954d6; margin:2px; display: inline-block; font-weight:500; box-shadow:0 1px 2px rgba(60,80,130,0.04);" href="#">Campus Services</a>
  <a class="quick-link" style="background: #262730; border: 1px solid #262730; border-radius: 14px; padding: 8px 16px; text-decoration: none; color: #2954d6; margin:2px; display: inline-block; font-weight:500; box-shadow:0 1px 2px rgba(60,80,130,0.04);" href="#">Clubs & Activities</a>
  <a class="quick-link" style="background: #262730; border: 1px solid #262730; border-radius: 14px; padding: 8px 16px; text-decoration: none; color: #2954d6; margin:2px; display: inline-block; font-weight:500; box-shadow:0 1px 2px rgba(60,80,130,0.04);" href="#">Pay Tuition</a>
  <a class="quick-link" style="background: #262730; border: 1px solid #262730; border-radius: 14px; padding: 8px 16px; text-decoration: none; color: #2954d6; margin:2px; display: inline-block; font-weight:500; box-shadow:0 1px 2px rgba(60,80,130,0.04);" href="#">Emergency</a>
</div>
'''
st.markdown(quick_link_html, unsafe_allow_html=True)

st.components.v1.html('''
<df-messenger
  intent="WELCOME"
  chat-title="UniBuddy"
  agent-id="d224fab8-7cd4-46a2-beba-3f4449f703ee"
  language-code="en"
></df-messenger>
<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
''', height=600)
